import React from "react"

const line1=["Contact Us", "About Us", "Careers", "Press"];
const line2=["Myntra", "Cleartrip", "Shopsy"]
const line3=["Payments","Shipping","FAQ", "Report infringement"]

export default function Footer(){
    return(
        <div class="container-fluid  shadow-lg">
  <footer class="py-5 ">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        
        <ul class="nav flex-column">
        {line1.map(i=>  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"> {i}</a></li>)}  
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        
      <ul class="nav flex-column">
        {line2.map(i=>  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"> {i}</a></li>)}  
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
      <ul class="nav flex-column">
        {line3.map(i=>  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"> {i}</a></li>)}  
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© Flupkart(Adrin's)2024 Company, Inc. All rights reserved.</p>
    </div>
  </footer>
</div>
    )
}