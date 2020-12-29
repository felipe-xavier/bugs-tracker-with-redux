import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnresolvedBugs, loadBugs, toggleResolveBug } from "../store/bugs";


function UnresolvedBugs() {
	const bugs = useSelector(getUnresolvedBugs);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadBugs());
	});
	
	return (
		<ul>
			{bugs.map(bug => (
				<li key={bug.id}>
					{bug.description}
					<button 
						onClick={() => dispatch(toggleResolveBug(bug.id))}
					> Resolve </button>
				</li>)
			)}
		</ul>
	);
}

export default UnresolvedBugs;