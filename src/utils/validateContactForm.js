export const validateContactForm = (values) => {

	const errors = {};

	// First Name
	if (!values.firstName) {
		errors.firstName = 'Required';
	}
	else if (values.firstName.length < 2) {
		errors.firstName = 'Must be at least 2 characters.';
	}
	else if (values.firstName.length > 15) {
		errors.firstName = 'Must be 15 characters or less.';
	}

	// Last Name
	if (!values.lastName) {
		errors.lastName = 'Required';
	}
	else if (values.lastName.length < 3) {
		errors.lastName = 'Must be at least 2 characters.';
	}
	else if (values.lastName.length > 15) {
		errors.lastName = 'Must be 15 characters or less.';
	}

	// Phone Number
	const reg = /^\d+$/;
	if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }

	// Email
	if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

	return errors;
};