import React from 'react'

const NewSingle = ({ item }) => (
	<div className='col s4'>
		<div className='card'>
			<div className='card-image'>
				<img src={item.urlToImage} alt={item.title} />
				<span className='card-title'></span>
			</div>
			<div className='card-content'>
				<p>{item.title}</p>
			</div>
			<div className='card-action'>
				{/* target="_blank" opens new tab for link, & maintains original open tab of app */}
				<a href={item.url}>Full article</a>
			</div>
		</div>
	</div>
)

export default NewSingle
