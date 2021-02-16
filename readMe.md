# 목적

한 방송에서 예능인 김희철이 한국 가요의 전주만 듣고 누구보다 빨리 노래를 맞추는 것을 본 적이 있을 것이다. 방송에서는 김희철이 매우 대단한 능력자로 비춰졌는데, 과연 김희철만 그런 재주를 가진 거였을까? 그런 가요에 대한 관심과 능력을 가진 사람이 또 있지 않을까? 또 그런 모습을 누군가에게 자랑하고 싶진 않을까?

그래서 만들었다. K-Pop Master.
한국 가요를 듣고 10초 안에(결국 전주만 듣는 셈이다) 그 가요의 제목을 알아맞추는 게임.

물런 포맷은 단순하다보니, K-pop 뿐 만 아니라 api만 갖춰진다면 빌보드의 음악도 가능 할 수 있다.
하지만 그건 나중의 이야기...

## 문제

게임 클랜 내에 친한 클래원 몇명이 매일같이 디스코드에 모여서 방송을 키고 미니게임을 하는 것을 보게 되었다. 그런데 그들이 모여서 하는 미니게임이 바로 위에 서술한 그 포맷과 똑같았다!

다만 그들이 하는 미니게임은 아주 오래된 스타크래프트 유저맵으로 만들었다는 게 문제였다. 스타크래프트가 명작이긴 하지만, 출시한 지 거의 30년이나 됐지 않는가? 그 미니게임을 하려고 다운받기에는 너무 불필요하고 의미없고 무거워 보였고, 한글 폰트도 깨져있어 보기에 매우 불편했다. 심지어 음질 또한 유저맵을 다운 받을 때 용량을 축소하기 위해 포맷을 했는지 듣기에도 안좋았다! 또한 주제가 다를 때마다 매번 새로운 데이터를 통째로(즉, 주제마다 100곡 전부!) 다운받고, 제작자가 매번 추가해줘야 하는 것 같았다.

적어도 위에 서술한 내눈에 보인 문제들만 해결하면 좋을 것 같았다.

- 간결한 UX, UI
- 음질이 좋을 것
- 새로운 음악이 나올 때마다 제작자가 추가하지 않아도 될 것
- 주제곡 100곡 전부가 아닌 문제로 제시되는 곡들만 받아 올 수 있을 것

## 프로젝트 설계

하루만에 간단하게 UX flow와 UI디자인을 짰다.
2021년 유행이라는 Glass Morphism도 적용해야지 하면서 신나있었다.

워낙 간결한 기능인지라, UI 디자인은 크게 신경을 안썼는데.... 그러다보니 프로젝트 마지막단계에서 UI디자인을 싹 다 뒤집어 엎어야만 했다. 왜냐하면 너무 대충 설계했다보니 responsive design에 대해 신경을 안 쓴 것이다! 모바일로 Glass Morphism 이 적용된 UI를 보니 '이건 아니다'라는 생각밖에 들지 않았다.

토이프로젝트가 처음인데다, 나혼자 하는 거라 실패도 있는 법...

고민에 고민을 거듭하다 결국 다시 UI디자인을 설계했는데, 이번에는 정말 제대로 모바일-타블렛-웹 순으로 디자인을 짰다. 물런 Glass Morphism은 제외했다. 🙄

##