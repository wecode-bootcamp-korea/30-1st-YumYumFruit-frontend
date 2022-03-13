# 냠냠프룻

![logo](https://user-images.githubusercontent.com/98295004/158053875-49bbc1a4-07ab-4760-9d95-c22b702da4fe.png)


### 프로젝트 소개

- 냠냠제주 클론 프로젝트
- 냠냠제주는 제주 과일을 이용하여 수작업 마말랭을 만드는 커머스 사이트로, 마말랭을 '과일'로 변경해 클론을 진행했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백엔드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### 프로젝트 선정이유

- 심플한 UI지만 다양한 기능을 갖고 있어, 단기간에 여러 기능을 구현해 볼 수 있는 사이트라고 생각해 선정하게 되었습니다.

### 개발 인원 및 기간

- 개발 기간 : 2022/2/28 ~ 2022/3/11
- 개발 인원
    - 프론트엔드
    - 김혜진 : [https://github.com/tyui3185](https://github.com/tyui3185)
    - 노유정 : [https://github.com/YOOKIKI](https://github.com/YOOKIKI)
    - 정건희 :
    - 백엔드 : 박건우, 이예솔, 윤명국

### 적용 기술

- Front-End : React, sass, html, javascript
- Back-End : Python, Django web framework, Bcrypt, MySQLcommon : Git, Github

### 구현 기능

- 회원가입, 로그인
- Nav, Footer
- 메인 페이지
- 상세 페이지
- 장바구니

# 시연

### 데모 영상

- [영상 링크](https://youtu.be/0jk_m39o8xE)
- [프론트엔드 github 링크](https://github.com/wecode-bootcamp-korea/30-1st-YumYumFruit-frontend)

### Nav

- 스크롤 이벤트 : 중간 Nav바가 상단으로 fixed 됨
- 로그인 이전 : LOGIN, JOIN 표시
- 로그인 이후 : LOGOUT 표시
    
    ![Nav_GIF](https://user-images.githubusercontent.com/98295004/158053772-378039f5-08cf-4d58-9323-53bd88d737c8.gif)


### Footer

- 해당 버튼에 따른 usenavgate 이용한 페이지 이동

![Footer Img1](https://user-images.githubusercontent.com/96294372/158054204-993b7208-6c00-41c6-8d6e-a34f0307976c.PNG)


### Main

- 슬라이드
- 상품 목록
    
![Main_GIF](https://user-images.githubusercontent.com/98295004/158053787-1cc866b7-52a0-4274-ab83-7731d5af2545.gif)


### 회원가입, 로그인

- 회원가입: 회원가입시 입력해야하는 모든 정보에 다양한 유효성 검사
유효성 검사를 통과하지 못 할 경우 그에 맞는 경고문구 출력
모든 유효성 검사를 통과 할 경우 회원가입
    
    ![회원가입4](https://user-images.githubusercontent.com/96294372/158054191-be54ac57-7a24-467a-8bee-65dc29be4501.gif)

    

- 로그인: 로그인시 입력창 클릭 후 공백인 상태로 다른곳을 클릭하면 
해당 입력창에 입력해달라는 경고문구 출력 
아이디 및 비밀번호 입력 후 로그인 버튼 클릭 시 서버에 정보 체크 후 
JWT로 발급받은 토큰을 받아 로컬스토리지에 저장
    
    ![로그인4](https://user-images.githubusercontent.com/96294372/158054195-60a1b35d-7f62-49f4-a488-5fa218a403fd.gif)

    

### 상품 리스트

- 카테고리 메뉴 : 메뉴 클릭 시, 상품을 카테고리별로 필터링
- 정렬 : 높은 금액순, 낮은 금액순, 이름순, 신상품순
- 페이지네이션 : 1p당 12개 출력, 전체 페이지 수만큼 pageNumBox 생성
    
![ProductList](https://user-images.githubusercontent.com/98295004/158053792-14bac8ea-6b98-4b4f-84f4-f62b1c6815f9.gif)


### 상품 상세 페이지

- 상품정보(상품명, 원산지, 금액, 썸네일이미지, 포장옵션, 설명, 본문이미지)
- 포장옵션 선택 기능
- 포장옵션 삭제 기능
- 포장옵션별 수량선택 기능
- 구매 버튼 클릭시 -> POST를 사용해 상품의 정보와 수량을 back-end로 전송
    
    ![냠냠프룻_상세페이지.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b728d6be-4228-42d8-ac0b-4c50ae6751eb/냠냠프룻_상세페이지.gif)
    

### 장바구니 페이지

- 유저 이름, 사용 가능한 적립금 표시
- 장바구니에 담은 상품 목록
- 상품 수량 변경
- 상품 삭제  : 개별삭제, 선택삭제, 일괄삭제
- 구매 시 적립되는 적립금 표시
- 배송비 표시
- 총 결제금액 표시 : 금액 + 배송비 합계
    
![Cart](https://user-images.githubusercontent.com/98295004/158053796-76360e67-323e-4de8-bbac-980e87cb5266.gif)


## Reference

- 이 프로젝트는 냠냠제주 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
