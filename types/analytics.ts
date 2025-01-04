export interface PageView {
  id: string
  page_path: string
  user_agent?: string
  ip_address?: string
  referrer?: string
  created_at: string
}

export interface DailyStats {
  id: string
  date: string
  total_views: number
  unique_visitors: number
  created_at: string
  updated_at: string
}

export interface ToolClick {
  id: string
  tool_id: number
  page_view_id: string
  created_at: string
}

export interface AnalyticsSummary {
  total_views: number
  today_views: number
  unique_visitors: number
  popular_tools: Array<{
    tool_id: number
    clicks: number
  }>
}