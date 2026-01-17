import React from 'react'

function Nav() {
  return (
    <>
    <div class="top-bar bg-dark text-light py-2 d-none d-lg-block">
  <div class="container">
    <div class="row align-items-center">

      <div class="col-lg-4">
        <strong id="ecourse">ECOURSES</strong>
        Next Planer Academy (SKD), Gilgit Baltistan
      </div>

      <div class="col-lg-4 ">
        <i class="bi bi-envelope text-primary"></i>
        <strong id="ecourse">Email</strong>
        muhammadalianjumbalghari@gmail.com
      </div>
      

      <div class="col-lg-4 text-start">
        <i class="bi bi-telephone text-primary"></i>
        <strong id="ecourse">Cell</strong>
        0355-5165163
      </div>

    </div>
  </div>
</div>
<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
  <div class="container">

    <a class="navbar-brand text-primary" href="#">Subjects</a>

  
    <button class="navbar-toggler d-lg-none" type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

   
    <div class="collapse navbar-collapse d-none d-lg-flex">
      <ul class="navbar-nav ms-auto align-items-center">

        <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="course.html">Courses</a></li>
        <li class="nav-item"><a class="nav-link" href="develaper.html">Developers</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>

        <li class="nav-item ms-3">
          <a class="btn btn-primary rounded-pill px-4" href="#">Join Us</a>
        </li>

      </ul>
    </div>

  </div>
</nav>
    </>
  )
}

export default Nav