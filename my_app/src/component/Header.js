import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div>
        <header id="header">
				<div id="header-inner">	
					<div id="logo">
						<h1><a href="#">Cool<span>Logo</span></a></h1>
					</div>
					<div id="top-nav">
						<ul>
						<li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>
						<li><a href="#">FAQ</a></li>
						<li><a href="#">Help</a></li>
						</ul>
					</div>
					<div class="clr"></div>
				</div>
			</header>
    </div>
  )
}
