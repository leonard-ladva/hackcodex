import Button from "../button/Button";

function ButtonPage({children, changePage, goBack}) {
	
	return (
		<div className="ButtonPage">
			{children && children.map((buttonData) => (
				<Button
					key={buttonData.name}
					buttonData={buttonData}
					changePage={changePage}
					goBack={goBack}
				/>
			))}
		</div>
  	);
}

export default ButtonPage;