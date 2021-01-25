import AsyncValidator, { RuleItem } from 'async-validator'
import mitt, { Emitter } from 'mitt'
import { inject, onUnmounted, provide, reactive, toRefs } from 'vue'

export interface IFormModelProps {
  [key: string]: string
}

export type IFormRuleItem = RuleItem & { trigger?: string }

export interface IFormRuleProps {
  [field: string]: IFormRuleItem | IFormRuleItem[]
}

export interface IFormProps {
  model?: IFormModelProps
  rules?: IFormRuleProps
}

export interface IFormItemProps {
  label?: string
  prop?: string
}

export interface IFormItemFunc {
  validate: Function
  resetField: Function
}

export interface IFormFunc {
  validate: Function
  resetFields: Function
}

/** 生成 form 对象*/
export function generateForm(props: IFormProps) {
  const bus = mitt()
  provide('form-bus', bus)
  provide('form', { ...props })

  const fields: IFormItemFunc[] = []
  bus.on('on-form-item-add', (field) => fields.push(field))
  bus.on('on-form-item-remove', (field) => fields.splice(fields.indexOf(field), 1))

  const resetFields = () => fields.forEach((field) => field.resetField())
  const validate = (callback: Function = () => {}) =>
    new Promise((resolve) => {
      let valid = true
      let count = 0
      fields.forEach((field) => {
        field.validate('', (errors: any) => {
          if (errors) {
            valid = false
          }
          if (++count === fields.length) {
            resolve(valid)
            callback(valid)
          }
        })
      })
    })

  return {
    resetFields,
    validate,
  }
}

/** 生成 form-item 对象*/
export function generateFormItem(props: IFormItemProps) {
  const bus = inject('form-bus') as Emitter
  const { model, rules } = inject('form') as IFormProps
  const { prop = undefined } = props

  const data = reactive({
    isRequired: false,
    validateState: '', //校验状态
    validateMessage: '', // 校验不通过的提示信息
  })

  /** 获取当前 form-item 的校验规则 */
  const getRules = () => ([] as IFormRuleItem[]).concat(rules && prop ? rules[prop] : [])

  /** 过滤出符合要求的 rule 规则 */
  const getFilteredRule = (trigger: string) =>
    getRules().filter((rule) => rule.trigger?.includes(trigger))

  const validate = (trigger: string, callback: Function = () => {}) => {
    const rules = getFilteredRule(trigger)
    if (!prop || rules.length === 0) {
      return true
    }

    data.validateState = 'validating'
    const validator = new AsyncValidator({ [prop]: rules })
    validator.validate({ [prop]: model?.[prop] }, { firstFields: true }, (errors) => {
      data.validateState = !errors ? 'succsee' : 'error'
      data.validateMessage = errors ? errors[0].message : ''

      callback(data.validateMessage)
    })
  }

  const onFieldBlur = () => validate('blur')
  const onFieldChange = () => validate('change')

  const resetField = () => {
    data.validateState = ''
    data.validateMessage = ''
    if (model && prop) {
      model[prop] = ''
    }
  }

  if (prop) {
    const formItem: IFormItemFunc = { validate, resetField }
    bus.emit('on-form-item-add', formItem)
    onUnmounted(() => bus.emit('on-form-item-remove', formItem))

    const formItemBus = mitt()

    formItemBus.on('on-form-blur', () => onFieldBlur())
    formItemBus.on('on-form-change', () => onFieldChange())
    provide('form-item-bus', formItemBus)

    getRules().every((rule) => (data.isRequired = !!rule.required))
  }

  return {
    ...toRefs(data),
  }
}
