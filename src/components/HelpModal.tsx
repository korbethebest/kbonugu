import * as stylex from '@stylexjs/stylex';
import { useEffect, useRef } from 'react';

type HelpModalProps =  {
  onClose: () => void;
}

const styles = stylex.create({
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '500px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#666',
    ':hover': {
      color: '#000',
    },
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
    borderBottom: '2px solid #f0f0f0',
    paddingBottom: '10px',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#444',
  },
  paragraph: {
    lineHeight: '1.6',
    marginBottom: '10px',
    color: '#555',
  },
  list: {
    paddingLeft: '20px',
    marginBottom: '10px',
  },
  listItem: {
    marginBottom: '5px',
    lineHeight: '1.4',
  },
});

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
    <div {...stylex.props(styles.modalOverlay)}>
      <div {...stylex.props(styles.modalContent)} ref={modalRef}>
        <button
          {...stylex.props(styles.closeButton)}
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>
        
        <h2 {...stylex.props(styles.title)}>게임 도움말</h2>
        
        <div {...stylex.props(styles.section)}>
          <h3 {...stylex.props(styles.sectionTitle)}>게임 방법</h3>
          <p {...stylex.props(styles.paragraph)}>
            이 게임은 숨겨진 야구 선수를 맞추는 게임입니다.
            <br />
            10번의 기회 안에 정답을 맞춰보세요!
          </p>
          <ul {...stylex.props(styles.list)}>
            <li {...stylex.props(styles.listItem)}>선수 이름을 입력하고 추측해보세요.</li>
            <li {...stylex.props(styles.listItem)}>각 추측마다 힌트가 제공됩니다.</li>
            <li {...stylex.props(styles.listItem)}>정답을 맞추거나 10번의 기회를 모두 사용하면 게임이 종료됩니다.</li>
          </ul>
        </div>
        
        <div {...stylex.props(styles.section)}>
          <h3 {...stylex.props(styles.sectionTitle)}>힌트 설명</h3>
          <p {...stylex.props(styles.paragraph)}>
            각 추측 후에는 다음과 같은 정보가 표시됩니다:
          </p>
          <ul {...stylex.props(styles.list)}>
            <li {...stylex.props(styles.listItem)}>팀: 선수의 소속 팀</li>
            <li {...stylex.props(styles.listItem)}>포지션: 선수의 포지션</li>
            <li {...stylex.props(styles.listItem)}>나이: 선수의 나이</li>
            <li {...stylex.props(styles.listItem)}>등번호: 선수의 등번호</li>
            <li {...stylex.props(styles.listItem)}>입단 연도: 선수가 프로에 입단한 연도</li>
          </ul>
        </div>
        
        <div {...stylex.props(styles.section)}>
          <h3 {...stylex.props(styles.sectionTitle)}>팁</h3>
          <p {...stylex.props(styles.paragraph)}>
            정확한 선수를 추측하기 위한 전략:
          </p>
          <ul {...stylex.props(styles.list)}>
            <li {...stylex.props(styles.listItem)}>먼저 다양한 팀의 선수들을 추측해보세요.</li>
            <li {...stylex.props(styles.listItem)}>힌트를 잘 활용하여 범위를 좁혀나가세요.</li>
            <li {...stylex.props(styles.listItem)}>나이와 입단 연도를 통해 세대를 파악하세요.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
