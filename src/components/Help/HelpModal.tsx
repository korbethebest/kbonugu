import * as styleX from '@stylexjs/stylex';
import { useEffect, useRef } from 'react';

import { modalStyles } from './styles';

type HelpModalProps = {
  onClose: () => void;
}

const HelpModal = ({ onClose }: HelpModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div {...styleX.props(modalStyles.overlay)}>
      <div {...styleX.props(modalStyles.content)} ref={modalRef}>
        <button
          {...styleX.props(modalStyles.closeButton)}
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>
        
        <h2 {...styleX.props(modalStyles.title)}>게임 도움말</h2>
        
        <div {...styleX.props(modalStyles.section)}>
          <h3 {...styleX.props(modalStyles.sectionTitle)}>게임 방법</h3>
          <p {...styleX.props(modalStyles.paragraph)}>
            이 게임은 숨겨진 야구 선수를 맞추는 게임입니다.
            <br />
            10번의 기회 안에 정답을 맞춰보세요!
          </p>
          <ul {...styleX.props(modalStyles.list)}>
            <li {...styleX.props(modalStyles.listItem)}>선수 이름을 입력하고 추측해보세요.</li>
            <li {...styleX.props(modalStyles.listItem)}>각 추측마다 힌트가 제공됩니다.</li>
            <li {...styleX.props(modalStyles.listItem)}>정답을 맞추거나 10번의 기회를 모두 사용하면 게임이 종료됩니다.</li>
          </ul>
        </div>
        
        <div {...styleX.props(modalStyles.section)}>
          <h3 {...styleX.props(modalStyles.sectionTitle)}>힌트 설명</h3>
          <p {...styleX.props(modalStyles.paragraph)}>
            각 추측 후에는 다음과 같은 정보가 표시됩니다:
          </p>
          <ul {...styleX.props(modalStyles.list)}>
            <li {...styleX.props(modalStyles.listItem)}>팀: 선수의 소속 팀</li>
            <li {...styleX.props(modalStyles.listItem)}>포지션: 선수의 포지션</li>
            <li {...styleX.props(modalStyles.listItem)}>나이: 선수의 나이</li>
            <li {...styleX.props(modalStyles.listItem)}>등번호: 선수의 등번호</li>
            <li {...styleX.props(modalStyles.listItem)}>입단 연도: 선수가 프로에 입단한 연도</li>
          </ul>
        </div>
        
        <div {...styleX.props(modalStyles.section)}>
          <h3 {...styleX.props(modalStyles.sectionTitle)}>팁</h3>
          <p {...styleX.props(modalStyles.paragraph)}>
            정확한 선수를 추측하기 위한 전략:
          </p>
          <ul {...styleX.props(modalStyles.list)}>
            <li {...styleX.props(modalStyles.listItem)}>먼저 다양한 팀의 선수들을 추측해보세요.</li>
            <li {...styleX.props(modalStyles.listItem)}>힌트를 잘 활용하여 범위를 좁혀나가세요.</li>
            <li {...styleX.props(modalStyles.listItem)}>나이와 입단 연도를 통해 세대를 파악하세요.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
