import styled from '@emotion/styled';

const getBase = () => {
  return {
    color: '#0B1F33',
    letterSpacing: '0px',
    fontWeight: '600',
  };
};

export const SH1 = styled('h1')(() => ({
  fontSize: '48px',
  lineHeight: '54px',
  ...getBase(),
}));

export const SH2 = styled('h2')(() => ({
  fontSize: '32px',
  lineHeight: '40px',
  ...getBase(),
}));

export const SH3 = styled('h3')(() => ({
  fontSize: '24px',
  lineHeight: '32px',
  ...getBase(),
}));

export const SH4 = styled('h4')(() => ({
  fontSize: '20px',
  lineHeight: '28px',
  ...getBase(),
}));

export const SH5 = styled('h5')(() => ({
  fontSize: '18px',
  lineHeight: '24px',
  ...getBase(),
}));

export const SH6 = styled('h6')(() => ({
  fontSize: '32px',
  lineHeight: '40px',
  ...getBase(),
}));
