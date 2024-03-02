import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #1f2328;
`;

export const Icon = styled.span`
  color: orange;
  margin-right: 10px;
`;

export const Strong = styled.strong`
  color: #1f2328;
  font-weight: 600;
`;

export const List = styled.ul`
  padding-left: 20px;
`;

const ExternalLinkLayout = styled.a`
  position: relative;
  font-weight: 600;
  color: #1f2328;
  padding: 4px 0;
  text-decoration: none;
  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: -0.15em;
    left: 0;
    width: calc(100% - 1em);
    height: 2px;
    pointer-events: none;
    background-color: #1f2328;
    transform-origin: 0 0;
    opacity: 0.2;
    transform: scaleX(1);
    transition: transform 0.3s ease;
  }
  &:after {
    transform: scaleX(0);
  }

  & > svg {
    transition: transform 0.2s;
    transform: translateX(0);
    width: 1em;
    height: 1em;
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    & > path:last-child {
      stroke-dasharray: 10;
      stroke-dashoffset: 10;
      transition: stroke-dashoffset 0.2s;
    }
  }

  &:hover {
    &:after {
      transform: scaleX(1);
      opacity: 1;
    }
    & > svg {
      transform: translateX(0.25em);
      & > path:last-child {
        stroke-dashoffset: 20;
      }
    }
  }
`;

const ExternalLinkIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
  >
    <path
      fill='#1f2328'
      d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'
    ></path>
    <path stroke='#1f2328' d='M1.75 8H11'></path>
  </svg>
);

export const ExternalLink = ({ children, ...props }) => {
  return (
    <ExternalLinkLayout {...props}>
      {children}
      <ExternalLinkIcon />
    </ExternalLinkLayout>
  );
};
