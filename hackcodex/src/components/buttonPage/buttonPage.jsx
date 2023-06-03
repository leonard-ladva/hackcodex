import Button from "../button/Button";

function ButtonPage({children, changePage}) {
	
	return (
		<div className="ButtonPage">
			{children && children.map((buttonData) => (
				<Button key={buttonData.name} buttonData={buttonData} changePage={changePage}/>
			))}
		</div>
  	);
}

export default ButtonPage;