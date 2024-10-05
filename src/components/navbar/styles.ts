nav {
    height: 8vh;
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
    align-items: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    position: fixed;
    top: 0;
    z-index: 100;
    background-color: white;
    width: 100%;
  }
  
  .logo svg {
    transition: all 0.5s ease;
    font-size: 6rem;
  }
  
  .logo svg:hover {
    cursor: pointer;
    color: cyan;
  }
  
  nav ul {
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 250px;
  }
  
  nav ul li {
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
  
  nav ul li a {
    transition: all 0.5s ease;
  }
  
  nav ul li a:hover {
    color: cyan;
  }
  
  nav ul li svg {
    font-weight: 900;
    font-size: 2rem;
  }
  
  /* Media Queries */
  
  /* Tablet */
  @media (min-width: 768px) {
    nav {
      height: 10vh;
    }
  
    .logo svg {
      font-size: 8rem;
    }
  
    nav ul {
      width: 300px;
    }
  
    nav ul li {
      font-size: 2rem;
    }
  
    nav ul li svg {
      font-size: 2.5rem;
    }
  }
  
  /* Desktop */
  @media screen and (min-width: 1080px) {
    .logo svg {
      font-size: 12rem;
    }
  
    nav ul {
      width: 400px;
    }
  
    nav ul li {
      font-size: 2.5rem;
    }
  
    nav ul li svg {
      font-size: 3rem;
    }
  }