
# 주니어 프론트엔드 개발자 김태수

## Problem 1

  width 750px을 기준으로 mobile 과 desktop의 반응형 웹을 구현 하였습니다.
  mobile인 경우, 드랍메뉴 형태의 메뉴바를 열고 닫을 수 있도록 구현 하였으며,
  desktop의 경우, 항상 보여지는 형태의 메뉴바 형태로 변하도록 미디어 쿼리를 사용하여 구현 하였습니다.

  또한 state에 font값을 저장 해 두어, 해당 state를 버튼으로 조절하고, 해당 state의 값에 따라
  폰트의 크기를 변경하도록 구현 하였습니다. (min 10px ~ max 25px)


## Problem 2-1

  function component의 형태로 component를 구현하여, user라는 값을 props의 형태로 하위 컴포넌트에
  전달 해 주고 있으니, 답은 props.user를 할당하게 되면 Hello Master 가 출력되게 됩니다.

## Problem 2-2

  해당 차트를 React로 구현하기 위하여, react-google-charts 모듈을 사용 하였으며,
  해당 모듈 내에 미리 정의된 Chart 컴포넌트를 통해 3D Pie Chart를 구현 하였습니다.

## Problem 2-3

  React와 Redux, React-Redux를 사용하여, state를 관리 하였으며 Ducks 패턴의 디렉토리 구조를 사용하여,
  한 눈에 보기 쉽게, 액션 및 액션생성함수, 리듀서 등을 한 파일에 구현 하였습니다.

  위의 기술로 상태를 관리하여 로그인 기능을 구현 하였으며, 로그인에 필요한 api는 주어지지 않아
  임의의 데이터와 토큰을 넣어주는 방식으로 흉내내어 구현 하였습니다.

  실제 기술 적용 시 fetch 및 axios를 이용하여 서버api를 통해 ID, PW 등을 서버에 보낸 후,
  서버에서 판단하여 보내진 토큰을 LocalStorage에 저장 후, 해당 저장소에 저장된 토큰의 여부에 따라
  로그인 및 유저 정보를 가져오는 기능을 구현할 수 있습니다.