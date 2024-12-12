import { useEffect } from "react";

function DisableScroll({isScrollDisabled }) {
	useEffect(() => {
		document.body.style.overflow = isScrollDisabled ? "hidden" : "";
		return () => (document.body.style.overflow = "");
	  }, [isScrollDisabled]);
	return null;
}

export default DisableScroll;