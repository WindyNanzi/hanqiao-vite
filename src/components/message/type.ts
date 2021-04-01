import { VNode } from '@vue/runtime-core'

export interface Notice {
  content: string
  duration: number
  key?: string
}

export const DEFAULT_NOTICE: Notice = {
  content: '',
  duration: 1500
}

export type MessageVM = VNode

export interface MessageQueueItem {
  vm: MessageVM
}

export type MessageQueue = Array<MessageQueueItem>

export interface MessageProps {
  id: string
  style: { top: string }
  message: string
  duration: number
}
