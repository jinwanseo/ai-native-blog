import Image from 'next/image'
import { Author } from 'app/blog/types'

interface AuthorProfileProps {
  authors: Author[]
}

/**
 * 게시글 작성자 프로필 컴포넌트
 *
 * 디자인:
 * - 구분선으로 본문과 시각적 분리
 * - 미니멀한 디자인 (아바타 + 이름만 표시)
 * - 다크모드 완전 지원
 * - 반응형 레이아웃 (모바일/데스크톱)
 */
export function AuthorProfile({ authors }: AuthorProfileProps) {
  if (authors.length === 0) {
    return null
  }

  return (
    <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-500 uppercase tracking-wide">
          {authors.length > 1 ? 'Authors' : 'Author'}
        </h2>

        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          {authors.map((author) => (
            <div key={author.id} className="flex items-center gap-3">
              {/* 아바타 이미지 */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src={author.avatar}
                  alt={`${author.name}'s avatar`}
                  fill
                  className="rounded-full object-cover"
                  sizes="48px"
                />
              </div>

              {/* 작성자 이름 */}
              <div className="flex flex-col">
                <span className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                  {author.name}
                </span>
                {/* 미래 확장: bio 표시 */}
                {/* {author.bio && (
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {author.bio}
                  </span>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
