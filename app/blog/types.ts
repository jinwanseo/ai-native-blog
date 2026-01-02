/**
 * 작성자 기본 정보
 * 현재는 이름과 아바타만 사용하지만, 향후 확장을 고려한 구조
 */
export interface Author {
  id: string // 고유 식별자 (MDX frontmatter에서 참조)
  name: string // 표시 이름
  avatar: string // 아바타 이미지 경로

  // 미래 확장을 위한 선택적 필드
  bio?: string // 짧은 소개
  email?: string // 이메일 (공개하지 않을 수 있음)
  social?: {
    github?: string
    twitter?: string
    linkedin?: string
    website?: string
  }
}

/**
 * 블로그 포스트 메타데이터
 */
export interface BlogMetadata {
  title: string
  publishedAt: string
  summary: string
  image?: string
  authors?: string[] // Author ID 배열 (다중 작성자 지원)
}

/**
 * 블로그 포스트 전체 데이터
 */
export interface BlogPost {
  metadata: BlogMetadata
  slug: string
  content: string
}
