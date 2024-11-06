# Development Environment

---
## Server Setting
    1. 웹 애플리케이션 서버
       Apache Tomcat
        - 버전: 11.0.x
        - JDK: Java 17 (Java 17 ~ Java 23)
    2. 운영체제
       Ubuntu
        - 버전: 22.04 LTS
    3. 데이터베이스 (DBMS)
       MySQL
        - 버전: 8.0.40
## 개발환경
   - IDE: WebStorm
   - languages: javascript, html, css
   - DBMS: MySQL
---
## Guide Line

### Programming Naming Conventions
    HTML/CSS
    - default: snake_case (형태_의미_순서_상태)
    - file name: lowercase
    - id: camelCase
    - class:
        - 단어 두개: camelCase 
        - 두개 이상:  kebab-case (- 으로 구분)

    javescript
    - default: camelCase
    - file name: kebab-case
    - class: PascalCase
    - variable: camelCase
    - function: camelCase

### Git (Github)
    - Branch
      1. main
      2. develop
      3. feature (여러개가 될 수 있음)
    - commit
        1. 세부적인 기능하나 만들 때 마다 커밋한다.
           - sign_in page의 기초틀 완료.
           - sign_in page의 form 1 완료.
           - sign_in page의 form 2 완료.
        2. input 하나 만들고 커밋하지 않고 하나의 틀이 완료되면 커밋한다.
    - pull request
        1. feature 별 branch 에서 작업한다.
        2. 작업한 내용을 add 한다.
        3. commit을 진행한다.
        4. 해당  branch 에서 기능 branch로 push를 진행한다.
        5. Github 에서 pull request 를 작성한다.
        6. 코드 종합 후 develop branch 로 merge 한다.
        7. 최종 모든 기능이 완료된 후 main branch 로 merge 한다.
---
# Services

### My Canvas
#### 1. **기능 개요**

- 소스는 오픈소스로 사용자가 해당 repository 를 fork 해서 개인 페이지를 만들 수 있도록 한다.
- 해당 사이트는 개발자를 위한 개인 포트폴리오 사이트를 간단하게 작성할 수 있다.

---
#### 2. **기능 구성**

1. **입력 폼**

    - 사용자가 작성할 항목별로 칸을 제공:
        - **프로젝트 이름**
        - **설명**
        - **기술 스택**
        - **기여자 목록**
        - **라이센스 정보**
        - **버전 정보**
        - **기타 섹션** (예: 기능 목록, 설치 방법, 사용 방법 등)
2. **미리보기 기능**
    - 사용자가 입력한 내용을 **실시간으로 미리보기** 가능.
    - 다양한 **테마와 스타일**(예: 깔끔한, 화려한, 심플한) 선택 옵션 제공.
3. **테마 적용**
    - 여러 종류의 디자인 테마를 선택할 수 있도록 함.
        - 다크 모드 / 라이트 모드
4. **결과물 저장 및 복사 기능**
    - 최종 결과물을 다음과 같은 형태로 제공:
        - **이미지 다운로드**: PNG 또는 JPG 등 원하는 파일 형식으로 다운로드.
---