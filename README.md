# preact, vite, swr : discussions

오늘은 React를 사용하거나 사용해보고 싶었던 분들이 관심을 가지고 다같이 실력을 키울 수 있는 공간이 되었으면 한다.

---

평소 많은 곳에서 여러 정보를 올려주고 있다 보니 스쳐가듯 보는 내용들도 많았다.

> 솔직히 다 보지는 못해도 제목 정도는 보고 기억하는 경우가 많다.

그 중에서 React를 경량화된 버전으로 사용할 수 있다고 나와있는 Preact에 대해서 알아보려는 생각을 하게 되었다.

[공식사이트](https://preactjs.com/)에 들어가게 되면 **첫 페이지에 3KB로 React의 최신 API를 사용할 수 있다**고 나와있다.

Maintainer 분들이 열심히 업데이트를 해주셔서 최신의 코드가 반영되어있었다.

> 이전 직장과 현 직장에서 Vue를 사용한 저조차 사용해볼 수 있었습니다.

# Preact

> [공식사이트](https://preactjs.com/)

Preact 공식사이트를 들어가게 되면 많은 내용들이 있다. 막히는 부분이 있다면 공식사이트를 먼저 찾아보고 구글에 검색해보는 것이 좋다.

기본 제공되는 CLI는 Pre-Render, SSR, PWA를 지원하는 템플릿을 제공한다.

이로 인해 쉽게 웹사이트를 구성할 수 있다. 

처음 작업하다보면 단순히 블로그를 만들기 위한 라이브러리인가 라는 생각이 들 수 있지만, React와 동일하게 많은 것을 포함해 구성하고 개발할 수 있다.

이 레포에서 서로 궁금한 점을 공유하면서 해결해 나갈 수 있으면 좋겠습니다.

궁금한 내용을 [Discussion](https://github.com/SeonHyungJo/preact-vite__discussions/discussions)에 올려주세요. 같이 해결하기 위한 레포니까요.

# Vite

Vue를 만든 Evan You가 Vue3 작업을 하면서 만든 Build tool이다. 

빠른 개발환경 제공을 목표로 한다.

실제로 사용해보면 Webpack을 사용할 때보다 실행되는 속도가 빠르다 것을 체감할 수 있을 것이다.

이는 Webpack은 Dev Server를 띄울 때 번들을 하고 올려야해서 사전 작업이 많이 걸리나 Vite는 Modarn Module type을 사용하여 좀 더 빠른 속도를 낼 수 있다고 한다.

Vue를 만든 Evan You가 만들어 Vue만 제공할 것으로 생각이 되었으나 친절하게 React, Vue, Preact를 지원하고 있다.

또한 Vite 공식 레포에 들어가면 create-vite-app을 확인할 수 있고, preact-ts 템플릿을 제공하는 것을 확인할 수 있다.

> [Vite repo 이동하기](https://github.com/vitejs/vite)

한 가지 고려해야하는 것은 IE11은 기본 제공하지 않으므로 설정을 해줘야 하는데, 이에 관하여 궁금하시면 아래 링크로 들어가서 질문에 올려주세요.

[질문 남기기](https://github.com/SeonHyungJo/preact-vite__discussions/discussions)


### 후기

Preact와 Vite 조합을 우연히 생각했는데, 이미 그것을 실천하고 계신분들이 많았다. 덕분에 쉽게 셋팅할 수 있었으며 좋은 경험을 하게 되었다.

React가 대세로 자리잡은 지금 시점에 새로운 것을 해보고 도전해보는 것을 좋다고 생각하며, React처럼 동작하게 하기위해 작업하는 일련의 과정이 좋은 경험이 된다고 생각한다.

빠른 개발속도, 높은 퍼포먼스를 경험해보기 위해 Preact + Vite를 해보는 것은 정말 추천하다.

#### Reference

- [Preact 공식사이트](https://preactjs.com/)
- [Vite Github repo](https://github.com/vitejs/vite)
- [create vite app](https://github.com/vitejs/create-vite-app)
