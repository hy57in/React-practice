# React-practice

react-practice에 들어간 다음 `.env`파일 생성 후 `SKIP_PREFLIGHT_CHECK = true`를 적는다.
package.json에 적어둔 babel-loader와 최신 버전의 create-react-app의 babel-loader가 충돌하기 때문에 버전 오류가 발생하지 않도록 루트 폴더에 npm 환경 변수 파일을 만들어 저장한다.

cannot find module 오류가 계속 발생할때
yarn으로 패키지가 제대로 설치되지 않는다면, node_modules 폴더를 삭제하고 다시 yarn 명령어를 실행하여 패키지를 설치한다.

vscode 플러그인 Reactjs code snippets 을 설치하면 좋다