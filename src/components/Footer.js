import React from 'react';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='footer l-auto'>
        <div className='l-col'>
          <h2 className='hours__heading'>Dinner Hours</h2>
          <p className='hours'>Tuesday-Thursday: 5pm-10pm</p>
          <p className='hours'>Friday: 5pm-11pm</p>
          <p className='hours'>Saturday: 4pm-11pm</p>
          <p className='hours'>Sunday: 4pm-10pm</p>
          <h2 className='hours__heading'>Weekend Brunch</h2>
          <p className='hours'>Saturday &amp; Sunday: 11:30am-3pm</p>
          <div className='socials'>
            <a
              href='https://www.facebook.com/moonshine152southie'
              className='social'
            >
              <svg
                id='icon-facebook'
                viewBox='0 0 32 32'
                width='16'
                height='16'
              >
                <title>Facebook</title>
                <path d='M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z'></path>
              </svg>
            </a>
            <a href='https://instagram.com/chefasiamei/' className='social'>
              <svg
                id='icon-instagram'
                viewBox='0 0 32 32'
                width='16'
                height='16'
              >
                <title>Instagram</title>
                <path d='M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z'></path>
                <path d='M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z'></path>
                <path d='M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z'></path>
              </svg>
            </a>
            <a href='https://twitter.com/moonshine152' className='social'>
              <svg id='icon-twitter' viewBox='0 0 32 32' width='16' height='16'>
                <title>Twitter</title>
                <path d='M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z'></path>
              </svg>
            </a>
            <a href='https://venmo.com/AsiaMei' className='social'>
              <svg id='icon-venmo' viewBox='0 0 30 32' width='16' height='16'>
                <title>Venmo</title>
                <path d='M28.299 0c1.164 1.91 1.701 3.91 1.701 6.388 0 7.97-6.806 18.328-12.328 25.582h-12.627l-5.045-30.239 11.045-1.045 2.687 21.522c2.507-4.060 5.582-10.478 5.582-14.836 0-2.388-0.418-4-1.045-5.343l10.030-2.030z'></path>
              </svg>
            </a>
          </div>
        </div>
        <div className='contacts l-colspan' id='delivery'>
          <h2 className='contacts__heading'>Order Delivery</h2>
          <a
            className='contact'
            href='https://www.doordash.com/store/moonshine-152-boston-24152703/16599752/'
            target='_blank'
            rel='noopener noreferrer'
          >
            We deliver with DOORDASH
          </a>
          {/* <a
            className='contact'
            href='https://www.trycaviar.com/store/moonshine-152-boston-24152703/16599752/'
            target='_blank'
            rel='noopener noreferrer'
          >
            We deliver with CAVIAR
          </a>
          <a
            className='contact'
            href='https://ordering.chownow.com/order/25650/locations'
            target='_blank'
            rel='noopener noreferrer'
          >
            We deliver with CHOWNOW
          </a> */}
          <a
            className='contact'
            href='https://www.grubhub.com/restaurant/moonshine-152-152-dorchester-ave-boston/504704'
          >
            We deliver with GRUBHUB
          </a>
          <a
            className='contact'
            href='https://www.ubereats.com/en-US/boston/food-delivery/moonshine-152/Z27-jG8CQvGhH_iG70G_1w/'
          >
            We deliver with UBEREATS
          </a>
          <h2 className='contacts__heading'>Get in Touch!</h2>
          <a className='contact' href='https://goo.gl/maps/FYmkY'>
            152 DORCHESTER AVE IN SOUTHIE, MASS.
          </a>
          <a className='contact' href='tel:6177524191'>
            617.752.4191
          </a>
          <a className='contact' href='mailto:asia@moonshine152.com'>
            EMAIL US for comments + employment inquiries
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
