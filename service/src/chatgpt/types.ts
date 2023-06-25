import type { ChatMessage } from 'chatgpt'
import type { ChatMessage as AzureChatMessage, GetChatCompletionsOptions } from '@azure/openai'
import type fetch from 'node-fetch'

export interface OpenaiRequestOptions {
  message: string
  lastContext?: { conversationId?: string; parentMessageId?: string }
  process?: (chat: ChatMessage) => void
  systemMessage?: string
  temperature?: number
  top_p?: number
}

export interface AzureRequestOptions extends GetChatCompletionsOptions {
  AzureChatMessage: AzureChatMessage[]
}

export interface SetProxyOptions {
  fetch?: typeof fetch
}

export interface UsageResponse {
  total_usage: number
}
