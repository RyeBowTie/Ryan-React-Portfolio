// static
import React from 'react';
import picture from '../assets/profile-picture.jpg'
import '../App.css'


const about = () => {
    return (
        <div>
            <h2>About Me</h2>
            <section className="about-me" id="about-me">
                <div className="biography">  
                    <img src={picture} alt="Ryan O'Donohue."></img>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet quis est sit amet molestie. Aliquam neque sapien, mattis quis iaculis a, placerat sit amet elit. Nunc id justo aliquet, consectetur libero ac, aliquam mauris. Sed condimentum condimentum nisi eu porttitor. Praesent sodales, mauris eget malesuada tempus, massa felis semper purus, eu laoreet quam metus a mauris. Nulla facilisi. Vestibulum elementum tellus eu velit cursus, posuere pharetra justo tincidunt. Cras arcu quam, dignissim in rhoncus ac, auctor in arcu. Suspendisse viverra enim ut mauris pretium, vitae rutrum felis ultrices. Donec eu neque in velit elementum rhoncus vel eget ipsum.
                    </p>
                    <p>
                        In commodo ante nec erat fringilla euismod. Aliquam luctus tortor gravida tellus laoreet ullamcorper eget ut odio. Integer porta, nibh semper efficitur ullamcorper, augue magna blandit metus, at feugiat quam enim eget leo. Maecenas non eleifend augue. Aenean porta ultricies feugiat. Nam nec sagittis erat. Donec rhoncus mauris cursus ultricies hendrerit. Proin a mauris quis urna sodales tempus quis cursus lectus. Suspendisse imperdiet justo imperdiet nibh finibus, id facilisis arcu pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus tempus ut massa vel congue.
                    </p>
                    <p>
                        In commodo ante nec erat fringilla euismod. Aliquam luctus tortor gravida tellus laoreet ullamcorper eget ut odio. Integer porta, nibh semper efficitur ullamcorper, augue magna blandit metus, at feugiat quam enim eget leo. Maecenas non eleifend augue. Aenean porta ultricies feugiat. Nam nec sagittis erat. Donec rhoncus mauris cursus ultricies hendrerit. Proin a mauris quis urna sodales tempus quis cursus lectus. Suspendisse imperdiet justo imperdiet nibh finibus, id facilisis arcu pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus tempus ut massa vel congue.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default about;