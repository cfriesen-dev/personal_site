import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function ProgressBar(props) {
  return (
    <Container width={props.width}>
      <Bar>
        <FilledBar data-testid="progress-bar-bar" width={props.progress ?? 0} />
      </Bar>
    </Container>
  );
}

const Container = styled.div`
  width: ${(props) => props.width}px;
`;

const Bar = styled.div`
  border-radius: 0.5rem;
  height: 0.75rem;
  width: 100%;
`;

const FilledBar = styled(Bar)`
  background: #77bfa3;
  transition: width 0.5s ease-out;
  width: ${(props) => props.width}%;
`;

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  progress: PropTypes.number,
};
