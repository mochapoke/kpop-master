# 프로젝트 소개

K-pop의 전주만 듣고 노래제목을 맞추는 미니 게임 웹 어플리케이션

## 배포

[플레이 하러 가기](https://kpopmaster.herokuapp.com/)

# ✨ 기획

## 사용 스택

![mern](https://user-images.githubusercontent.com/71932072/108599968-9337c280-73d7-11eb-8422-7de91c3e67fc.png)

React의 상태관리는 React Hooks과 Redux를 사용하였습니다.

### 프론트엔드

- 리액트로 구축
- 반응형 웹페이지
- axios를 사용하여 클라이언트-서버 간 RESTful API 형식으로 통신

### 백엔드

- node.js + express를 이용하여 구축
- MongoDB, mongoose를 이용하여 DB 생성
- 유저 정보, 게임 결과, 댓글, 좋아요와 싫어요의 CRUD 가 주요 기능
- YOUTUBE Data API v3를 호출하여 노래제목만으로 영상 정보 검색

## 주요 기능

- 사용자가 플레이할 **난이도**(쉬움, 보통, 어려움), **테마**(가수, 년도별, 이번주) 선택과 적용
- `melon-chart-parser` 디펜던시를 사용하여 음악 정보 가져오기
- `youtube v3 api`를 활용하여 위에서 가져온 음악 정보를 토대로 검색 후 플레이
- 힌트 제공
  - 노래제목이 한글이면, 힌트는 **초성**으로 보여짐
  - 노래제목이 영어면, 힌트는 **무작위**로 뽑힌 3글자 혹은 1글자만 보여짐
- `사용자가 입력한 답안`과 `플레이 중인 노래 제목`를 비교하여 **정답 판별**
- 20초 초과 시 다음 라운드로 넘어감
- 특정 키워드(`!!`) 입력 시, 다음 라운드로 넘어감
- 게임 결과, 유저 정보, 코멘트 정보를 `mongoDB`에 기록
  - 비회원, 미접속 경우 게임 결과는 기록되지 않음
- `mongoDB`에 저장된 기록을 토대로 현재 플레이 점수가 몇등인지 판별
- 회원가입 및 로그인 기능
- `bcrypt`로 유저 정보 암호화, `jwt`로 생성한 `token`은 `cookie`에 보관
- 댓글 기능
- 좋아요와 싫어요
- 명예의 전당: 점수 순으로 랭킹
  - 로그인 유저일 경우, 본인의 전적만 따로 확인 가능
- 획득한 점수에 대응하는 게임 결과 판독
- YOUTUBE API v3의 일일 사용량 제한때문에, API에서 가져오는 데이터 일부를 DB에 저장하여 사용량을 줄임

## 구현 화면

![mobile](https://user-images.githubusercontent.com/71932072/109439779-178ee300-7a73-11eb-9c6a-9b0cc91693a8.png)
![laptop](https://user-images.githubusercontent.com/71932072/109439780-18c01000-7a73-11eb-8172-bb3a6a076030.png)

![howtoplay](https://user-images.githubusercontent.com/71932072/109440066-36da4000-7a74-11eb-9995-67136ca8b55b.png)

# 🌼 후기

## ui 부분

토이 프로젝트라고 해도, 아무리 아주 작은 부분이더라도 기획단계에서 완벽하게 만들어야한다는 걸 깨달았습니다. 예를 들면

- round radius value
- color
- margin, pading value(아주 정확하게!)
- width, height value
- 컴포넌트끼리 묶는 컨테이너의 존재까지!
- 컴포넌트의 파일 명!

제가 만든 재사용 컴포넌트는 너무 스파게티 같아 보입니다. 뭔가 추가할 때마다 매번 자그마한 화면의 에러가 나타나서 계속 전체적으로 한번 더 훑어봐야했단게 아쉽습니다. 🤯

애초에 기획단계에서도 파일구조도 파일명도 기획하는 걸까요? 충분히 변별력을 유의하며 파일명을 작성했어도, 나중에 보면 비슷한 파일명이 너무 많아 구분하기 힘들었습니다.😨 파일구조도 너무 복잡해 보이고요. 더 간단하게 보이는 방법은 없는걸까요?

다음에는 Styled Components에서 제공하는 theme provider를 이용해봐야겠습니다. 매번 theme파일을 import 하는 게 번거롭기도 하고, 좀더 코드양을 줄이고 싶어거든요.
