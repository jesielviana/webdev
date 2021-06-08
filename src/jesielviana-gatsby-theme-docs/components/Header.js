import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  margin-bottom: 24px;
  h2 {
    margin: 0;
    border: none;
    padding: 0;
    font-size: 1.5rem;
    font-family: 'Yanone Kaffeesatz';
    font-weight: 700;
    @media (max-width: 359px) {
      font-size: 1rem;
    }
    @media (min-width: 780px) {
      display: none;
    }
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
    margin-right: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (min-width: 780px) {
      display: none;
    }
  }

  .toggle-color-mode:checked {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 4px solid var(--toggleIcon);
    background-color: var(--toggleIcon);
    transform: scale(0.55);
    transition: all 0.45s ease;
    overflow: visible;
    box-shadow: none;
}

.toggle-color-mode {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  transform: scale(1);
  transition: all 0.45s ease;
  overflow: hidden;
  box-shadow: inset 8px -8px 0px 0px var(--toggleIcon);
}

.toggle-color-mode:checked:before {
  content: '';
  position: absolute;
  right: -9px;
  top: -9px;
  height: 24px;
  width: 24px;
  border: 2px solid var(--toggleIcon);
  border-radius: 50%;
  transform: translate(14px, -14px);
  opacity: 0;
  transition: transform 0.45s ease;
}

.toggle-color-mode:checked:after {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: -4px 0 0 -4px;
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: 0 -23px 0 var(--toggleIcon), 0 23px 0 var(--toggleIcon),
    23px 0 0 var(--toggleIcon), -23px 0 0 var(--toggleIcon),
    15px 15px 0 var(--toggleIcon), -15px 15px 0 var(--toggleIcon),
    15px -15px 0 var(--toggleIcon), -15px -15px 0 var(--toggleIcon);
  transform: scale(1);
  transition: all 0.35s ease;
}

.toggle-color-mode:before {
  content: '';
  position: absolute;
  right: -9px;
  top: -9px;
  height: 24px;
  width: 24px;
  border: none;
  border-radius: 50%;
  transform: translate(0, 0);
  opacity: 1;
  transition: transform 0.45s ease;
}

.toggle-color-mode:after {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: -4px 0 0 -4px;
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: 0 -23px 0 var(--toggleIcon), 0 23px 0 var(--toggleIcon),
    23px 0 0 var(--toggleIcon), -23px 0 0 var(--toggleIcon),
    15px 15px 0 var(--toggleIcon), -15px 15px 0 var(--toggleIcon),
    15px -15px 0 var(--toggleIcon), -15px -15px 0 var(--toggleIcon);
  transform: scale(0);
  transition: all 0.35s ease;
}

.toggle-color-mode:focus {
  outline: none;
}

.toggle-color-btn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  @media (min-width: 780px) {
    padding: calc(1rem + 1.5% + 2px) calc(3% + 1rem) 0 0;
  }
}

.toggle-color-btn-slides {
  position: absolute;
  top: calc(1rem + 5%);
  right: 2rem;
}

input[type='checkbox'] {
  -webkit-appearance: checkbox !important;
  -moz-appearance: checkbox !important;
  -ms-appearance: checkbox !important;
  -o-appearance: checkbox !important;
  appearance: none !important;
}
`

export default function Header ({ handleMenuOpen }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `
  )

  const { siteTitle } = site.siteMetadata

  return (
    <Container>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className='toggle-color-btn'>
            <input
              title={theme === 'dark' ? 'Light' : 'Dark'}
              className='toggle-color-mode'
              type='checkbox'
              onChange={e =>
                toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
          </label>
        )}
      </ThemeToggler>
      <button aria-label='Open sidebar' type='button' onClick={handleMenuOpen}>
        <GiHamburgerMenu size={23} aria-hidden='true' />
      </button>
      <h2>{siteTitle}</h2>
    </Container>
  )
}

Header.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired
}
