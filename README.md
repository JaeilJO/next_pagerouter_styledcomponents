# 참고

- Next.js page router
- Styled components

# 로컬 실행법

### 이미지를 hub에 업데이트 하는 경우

1. docker-compose.dev.yml 파일의 image에 해당 image 설정
2. .env.dev 생성
3. docker-compose -f docker-compose.dev.yml up

### 이미지를 hub에 업데이트 안하는 경우

1. docker-compose.dev.yml 파일의 image 옵션 제거
2. dockerfile 옵션 활성화
3. .env.dev 생성
4. docker-compose -f docker-compose.dev.yml up

### Docker 이용을 안하는 경우

1. npm run dev(3001포트)로 실행

<br/>
<br/>

# 배포

### 이미지를 hub에 업데이트 하는 경우

1. docker-compose.dev.yml 파일의 image에 해당 image 설정
2. .env.prod 생성
3. docker-compose -f docker-compose.prod.yml up

### 이미지를 hub에 업데이트 안하는 경우

1. docker-compose.dev.yml 파일의 image 옵션 제거
2. dockerfile 옵션 활성화
3. .env.prod 생성
4. docker-compose -f docker-compose.prod.yml up
# next_pagerouter_styledcomponents
