import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <aside>
    <h6 className='text-2xl font-bold'>CS — Ticket System</h6>
    <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Doloribus aperiam enim aliquid quia nisi <br /> magnam voluptate eius iusto tempore a.
    </p>
  </aside>
  
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Saled</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download Apps</a>
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Join Us</a>
  </nav>
  
  
</footer>
    </>
  )
}
