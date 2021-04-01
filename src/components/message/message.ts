import MessageComp from './index.vue'
import { h, render } from 'vue'
import { MessageQueue, MessageProps } from './type'

let seed = 1
const instances: MessageQueue = []

const Message = function({ message, duration = 1500 }: { message: string; duration?: number }) {
  const container = document.createElement('div')
  const id = `message-${seed++}`
  let verticalTopOffset = 0
  instances.forEach(() => {
    verticalTopOffset += 50
  })
  verticalTopOffset += 20
  const elProps: MessageProps = { id, style: { top: `${verticalTopOffset}px` }, message, duration }
  const vm = h(MessageComp, elProps)
  render(vm, container) //render 之后，vm 上才会出现 el 属性， ctx属性
  instances.push({ vm })
  document.body.appendChild(container.firstElementChild!)

  setTimeout(() => close(id), duration)
}

export function close(messageId: string) {
  const index = instances.findIndex(({ vm }) => vm.props?.id === messageId)
  instances.splice(index, 1)
}

export default Message
