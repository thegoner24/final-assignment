# Company Profile Website

This is a simple and responsive company profile website built with HTML and CSS. It includes sections for Home, Services, Portfolio, Team, and Contact Us. The website aims to showcase the services and team of a digital agency.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Sections Overview](#sections-overview)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design for various screen sizes.
- Navigation bar with smooth scrolling.
- Hero section with a call to action.
- Services section to showcase what the company offers.
- Portfolio section with images of past projects.
- Team section featuring team members.
- Contact form with service selection.
- Footer with copyright information.

## Technologies Used

- HTML5

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/revou-fsse-oct24/module-1-thegoner24.git
    ```
2. Navigate to the project directory:
    ```bash
    cd module-1-thegoner24
    ```
3. Open the `index.html` file in your browser:
    ```bash
    open index.html
    ```
4. **Assets Folder** (assets folder will located outside the project for development purpose) to call it into html you can use " ../ " :
    ```
    
    <img src="../assets/img/RevoU Youtube Thumbnail (1).png"
    ```

## Sections Overview

### 1. **Hero Section**
   - Choosing to use hero section for make a background image with a welcome message and a call-to-action button.
      ![hero section](../assets/img/domentation/Screenshot%202024-10-25%20001520.png)
### 2. **Services**
   - Highlights the main services, such as Web Design, Photography, and Videography.
      ![services](../assets/img/domentation/Screenshot%202024-10-25%20001931.png)

### 3. **Portfolio**
   - Displays images from past projects with descriptions.
      ![portfolio](../assets/img/domentation/Screenshot%202024-10-25%20001951.png)

### 4. **Team**
   - Introduces the company's key team members with images and titles.
      ![team](../assets/img/domentation/Screenshot%202024-10-25%20002006.png)

### 5. **Contact Form**
   - A form where users can enter their details and select a service to inquire about.
      ![contact-form](../assets/img/domentation/Screenshot%202024-10-25%20002204.png)

## Code 

On each section, i use div or declare section semantics and give class for each section. To make it easy for development (styling/logic).

> Example

    <section class="services">
        <h2>Our Services</h2>
        <div class="service-cards">
            <div class="service">
                <h3>Web Design</h3>
                <p>Designing responsive, user-friendly websites that showcase your brand and drive engagement.</p>
            </div>
     </section>"

