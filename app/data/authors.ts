import { Author } from 'app/blog/types'

/**
 * 작성자 데이터베이스
 * 모든 작성자 정보를 중앙에서 관리
 */
export const AUTHORS: Record<string, Author> = {
  'jinwan-seo': {
    id: 'jinwan-seo',
    name: 'Jinwan Seo',
    avatar: '/avatars/jinwan-seo.svg',
  },
} as const

/**
 * Author ID로 작성자 정보를 조회하는 헬퍼 함수
 * @param id - Author ID
 * @returns Author 객체 또는 undefined
 */
export function getAuthorById(id: string): Author | undefined {
  return AUTHORS[id]
}

/**
 * 여러 Author ID로 작성자 목록을 조회하는 헬퍼 함수
 * @param ids - Author ID 배열
 * @returns 유효한 Author 객체 배열
 */
export function getAuthorsByIds(ids: string[]): Author[] {
  return ids
    .map((id) => AUTHORS[id])
    .filter((author): author is Author => author !== undefined)
}

/**
 * 기본 작성자 (작성자 정보가 없는 경우)
 */
export const DEFAULT_AUTHOR: Author = {
  id: 'default',
  name: 'Anonymous',
  avatar: '/avatars/default.svg',
}
