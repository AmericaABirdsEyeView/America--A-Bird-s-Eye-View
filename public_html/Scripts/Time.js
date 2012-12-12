function sameDate(date1, date2) {
	if(date1.getDate() == date2.getDate()) {
		if(date1.getMonth() == date2.getMonth()) {
			if(date1.getFullYear() == date2.getFullYear()) {
				return true;
			}
		}
	}
	return false;
}

function before(date1, date2) {
	if(date1.getFullYear() < date2.getFullYear()) {
		return true;
	}
	else if(date1.getFullYear() == date2.getFullYear()) {
		if(date1.getMonth() < date2.getMonth()) {
			return true;
		}
		else if(date1.getMonth() == date2.getMonth()) {
			if(date1.getDate() < date2.getDate()) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
}

function after(date1, date2) {
	if(date1.getFullYear() > date2.getFullYear()) {
		return true;
	}
	else if(date1.getFullYear() == date2.getFullYear()) {
		if(date1.getMonth() > date2.getMonth()) {
			return true;
		}
		else if(date1.getMonth() == date2.getMonth()) {
			if(date1.getDate() > date2.getDate()) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
}

function existsIn(dates, date) {
	for(var i = 0; i < dates.length; i++) {
		if(sameDate(date, dates[i])) {
			return true;
		}
	}
}