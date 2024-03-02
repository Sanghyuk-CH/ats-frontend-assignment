import styled from 'styled-components';

// button 태그와 동일하게 사용할 수 있습니다.
export const Button = styled.button`
  appearance: none;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  list-style: none;
  padding: 5px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
  &:hover {
    background-color: #f3f4f6;
    text-decoration: none;
    transition-duration: 0.1s;
  }
  &:disabled {
    background-color: #fafbfc;
    border-color: rgba(27, 31, 35, 0.15);
    color: #959da5;
    cursor: default;
  }
  &:active {
    background-color: #edeff2;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
  }
  &:focus {
    outline: 1px transparent;
  }
`;

// input 태그와 동일하게 사용할 수 있습니다.
export const Input = styled.input`
  padding: 5px 12px;
  font-size: 14px;
  vertical-align: middle;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color, background-color, box-shadow, border-color;
  line-height: 18px;
`;

// Select 태그와 동일하게 사용할 수 있습니다.
export const Select = styled.select`
  padding: 5px 12px;
  font-size: 14px;
  vertical-align: middle;
  background-color: #f6f8fa;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color, background-color, box-shadow, border-color;
`;

// <StatusCircle $color={color} /> 와 같이 사용할 수 있습니다.
// 사용자의 상태를 나타내는 아이콘입니다.
export const StatusCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  background-color: ${({ $color }) => $color};
`;

// <Statistics></Statistics> 와 같이 사용할 수 있습니다.
// 사용자의 통계를 나타내는 BOX를 감싸는 div 입니다.
// StatisticsItem 컴포넌트를 자식으로 가집니다.
export const Statistics = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
`;

// <StatisticsItem></StatisticsItem> 와 같이 사용할 수 있습니다.
// 사용자의 통계를 나타내는 BOX입니다.
export const StatisticsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgba(53, 72, 91, 0.14), 0 3px 2px rgba(0, 0, 0, 0.04), 0 7px 5px rgba(0, 0, 0, 0.02),
    0 13px 10px rgba(0, 0, 0, 0.02), 0 22px 17px rgba(0, 0, 0, 0.02);
  background-color: #fff;
  flex: 1;

  &:nth-child(1) > p {
    color: #0969da;
  }
  &:nth-child(2) > p {
    color: #8250df;
  }
  &:nth-child(3) > p {
    color: #9a6700;
  }
  &:nth-child(4) > p {
    color: #1a7f37;
  }
`;

// <StatisticsTitle></StatisticsTitle> 와 같이 사용할 수 있습니다.
// 사용자의 통계를 나타내는 BOX의 제목입니다.
// StatisticsItem 컴포넌트 내부에서 사용합니다.
export const StatisticsTitle = styled.h3`
  font-size: 20px;
  color: #1f2328;
  margin: 0;
`;

// <StatisticsValue></StatisticsValue> 와 같이 사용할 수 있습니다.
// 사용자의 통계를 나타내는 BOX의 값입니다.
// StatisticsItem 컴포넌트 내부에서 사용합니다.
export const StatisticsValue = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: #1f2328;
  margin: 0;
`;

// <Table></Table> 와 같이 사용할 수 있습니다.
// 사용자 목록을 나타내는 테이블입니다.
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  thead {
    border-bottom: 1px solid #d0d7de;
  }
  th {
    text-align: left;
    padding: 8px 0;
    &:first-child {
      text-align: center;
    }
  }
  td {
    padding: 8px 0;
    &:first-child {
      text-align: center;
    }
  }
`;

// <Title></Title> 와 같이 사용할 수 있습니다.
// 사용자 추가 페이지의 제목입니다.
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1f2328;
  margin: 0;
`;

// <Label></Label> 와 같이 사용할 수 있습니다.
// 사용자 추가 페이지의 input label입니다.
export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #1f2328;
  margin: 0;
`;
