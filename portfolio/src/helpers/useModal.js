import { useState } from 'react';

const useModal = () => {
	const [isShowing1, setIsShowing1] = useState(false);
	const [isShowing2, setIsShowing2] = useState(false);
	const [isShowing3, setIsShowing3] = useState(false);
	const [isShowing4, setIsShowing4] = useState(false);
	const [isShowing5, setIsShowing5] = useState(false);
	const [isShowing6, setIsShowing6] = useState(false);

	function toggle1() {
		setIsShowing1(!isShowing1);
	}
	function toggle2() {
		setIsShowing2(!isShowing2);
	}
	function toggle3() {
		setIsShowing3(!isShowing3);
	}
	function toggle4() {
		setIsShowing4(!isShowing4);
	}
	function toggle5() {
		setIsShowing5(!isShowing5);
	}
	function toggle6() {
		setIsShowing6(!isShowing6);
	}

	return {
		isShowing1,
		isShowing2,
		isShowing3,
		isShowing4,
		isShowing5,
		isShowing6,
		toggle1,
		toggle2,
		toggle3,
		toggle4,
		toggle5,
		toggle6,
	};
};

export default useModal;
