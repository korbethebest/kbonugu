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
            <li {...styleX.props(modalStyles.listItem)}>화면 상단의 <strong>검색창</strong>에 KBO 선수 이름을 입력하세요.</li>
            <li {...styleX.props(modalStyles.listItem)}>선수 이름을 입력하면 자동완성 목록이 나타납니다.</li>
            <li {...styleX.props(modalStyles.listItem)}>목록에서 선수를 <strong>클릭</strong> 혹은 <strong>터치</strong>하여 추측을 시도해보세요.</li>
            <li {...styleX.props(modalStyles.listItem)}>각 추측 결과는 화면에 기록되며, 정답과 비교한 힌트가 표시됩니다.</li>
            <li {...styleX.props(modalStyles.listItem)}>정답을 맞추거나 10번의 기회를 모두 사용하면 게임이 종료됩니다.</li>
          </ul>
        </div>
        
        <div {...styleX.props(modalStyles.section)}>
          <h3 {...styleX.props(modalStyles.sectionTitle)}>화면 구성 설명</h3>
          <p {...styleX.props(modalStyles.paragraph)}>
            게임 화면은 다음과 같이 구성되어 있습니다:
          </p>
          <ul {...styleX.props(modalStyles.list)}>
            <li {...styleX.props(modalStyles.listItem)}><strong>상단 제목</strong>: 게임 이름과 로고가 표시됩니다.</li>
            <li {...styleX.props(modalStyles.listItem)}><strong>검색창</strong>: 선수 이름을 입력하는 곳입니다.<br />입력 시 자동완성 기능이 작동합니다.</li>
            <li {...styleX.props(modalStyles.listItem)}><strong>추측하기</strong>: 선수 이름을 입력하고 자동완성 목록에서<br />선수를 선택하면 입력한 선수에 대한 추측 결과가 표시됩니다.</li>
            <li {...styleX.props(modalStyles.listItem)}><strong>추측 기록</strong>: 이전에 시도한 선수들의 정보와 힌트가 표시됩니다.<br />총 10번의 기회 중 현재까지 사용한 기회를 확인할 수 있습니다.</li>
            <li {...styleX.props(modalStyles.listItem)}><strong>게임 진행 상황</strong>: 지금까지 시도한 추측 횟수를 통해<br />남은 기회를 파악할 수 있습니다 (최대 10번).</li>
            <li {...styleX.props(modalStyles.listItem)}><strong>도움말 버튼</strong>: 화면 우측 하단의 물음표(?) 버튼을 클릭하면<br />언제든지 이 도움말을 다시 볼 수 있습니다.</li>
          </ul>
        </div>
        
        <div {...styleX.props(modalStyles.section)}>
          <h3 {...styleX.props(modalStyles.sectionTitle)}>힌트 설명</h3>
          <p {...styleX.props(modalStyles.paragraph)}>
            각 추측 후에는 다음과 같은 정보와 힌트가 표시됩니다:
          </p>
          <ul {...styleX.props(modalStyles.list)}>
            <li {...styleX.props(modalStyles.listItem)}><strong>팀</strong>: 선수의 소속 팀. 정답 선수와 같은 팀이면 초록색으로 표시됩니다.</li>
            <li {...styleX.props(modalStyles.listItem)}><strong>포지션</strong>: 선수의 포지션.<br />정답 선수와 같은 포지션이면 초록색으로 표시됩니다.</li>
            <li {...styleX.props(modalStyles.listItem)}><strong>나이</strong>: 선수의 나이.<br />정답 선수보다 나이가 많으면 ⬇️, 적으면 ⬆️ 화살표가 표시됩니다.</li>
            <li {...styleX.props(modalStyles.listItem)}><strong>등번호</strong>: 선수의 등번호.<br />정답 선수보다 번호가 크면 ⬇️, 작으면 ⬆️ 화살표가 표시됩니다.</li>
            <li {...styleX.props(modalStyles.listItem)}><strong>입단 연도</strong>: 선수가 프로에 입단한 연도.<br />정답 선수보다 늦게 입단했으면 ⬇️,<br />일찍 입단했으면 ⬆️ 화살표가 표시됩니다.</li>
          </ul>
          <p {...styleX.props(modalStyles.paragraph)}>
            <strong>참고</strong>: 초록색으로 표시된 항목은 정답과 일치함을 의미합니다.<br />화살표는 정답과의 상대적 관계를 나타냅니다.
          </p>
        </div>
        
        <div {...styleX.props(modalStyles.section)}>
          <h3 {...styleX.props(modalStyles.sectionTitle)}>전략 팁</h3>
          <p {...styleX.props(modalStyles.paragraph)}>
            정확한 선수를 추측하기 위한 효과적인 전략:
          </p>
          <ul {...styleX.props(modalStyles.list)}>
            <li {...styleX.props(modalStyles.listItem)}>처음에는 다양한 팀의 대표 선수들을 추측해 보세요.<br />이를 통해 팀을 빠르게 좁힐 수 있습니다.</li>
            <li {...styleX.props(modalStyles.listItem)}>팀을 파악한 후에는 해당 팀 내에서<br />다양한 포지션의 선수들을 시도해보세요.</li>
            <li {...styleX.props(modalStyles.listItem)}>나이와 입단 연도 힌트를 통해 선수의 세대를 파악하세요.<br />이는 선수 풀을 크게 줄이는 데 도움이 됩니다.</li>
            <li {...styleX.props(modalStyles.listItem)}>등번호 힌트는 특히 같은 팀,<br />같은 포지션의 선수들을 구분하는 데 유용합니다.</li>
            <li {...styleX.props(modalStyles.listItem)}>모든 힌트를 종합적으로 분석하여<br />가능성 있는 선수들을 체계적으로 좁혀나가세요.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
