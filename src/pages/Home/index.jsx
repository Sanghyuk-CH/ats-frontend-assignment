import { Container, Title, Icon, Strong, List, ExternalLink } from './styles';
export default function Home() {
  return (
    <Container>
      <Title>기본 안내</Title>
      <p>
        <Icon>⚠️</Icon>
        <Strong>과제의 저작권은 아틀라스네트웍스에 있습니다. </Strong>
        공정한 과제를 위하여 <Strong>불법 복제 및 재 배포는 금지</Strong>됩니다.
      </p>
      <p>프론트엔드 과제는 다음과 같이 진행됩니다.</p>
      <List>
        <li>
          사전 작업을 통해 프로젝트
          <Strong> 기본 설정을 진행</Strong>합니다.
        </li>
        <li>
          원하는 템플릿을 다운로드 후 목표에 따라 Branch를 구분하여 3시간, 1시간
          과제를 수행합니다.
          <List>
            <li>
              기능을 구현하는 <Strong>Feature 과제</Strong>를
              <Strong> 3시간</Strong> 동안 진행합니다.
            </li>
            <li>
              가독성과 유지보수성을 높이기 위한
              <Strong> Refactoring 과제</Strong>를 <Strong>1시간</Strong>동안
              진행합니다.
            </li>
          </List>
        </li>
        <li>
          모든 과제 수행이 지나면 본인의 <Strong>Github에 업로드</Strong>
          합니다.
        </li>
        <li>
          결과물에 대한 본인의 평가 및 문의 사항은 최종 제출 시 작성합니다.
        </li>
      </List>
      <ExternalLink
        target='_blank'
        href='https://xdn.notion.site/Atlasnetworks-Frontend-Assignment-ce92c178e3214ebaac1f465dced61d6f?pvs=4'
      >
        과제 상세 안내 보러가기
      </ExternalLink>
    </Container>
  );
}
