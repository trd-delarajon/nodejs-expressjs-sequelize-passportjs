function deleteLead(lead_id){
	$.ajax({
		url: '/lead/delete-ajax/' + lead_id,
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		data: JSON.stringify({lead_id}),
		type: 'POST',
		success: ((res) => {
			console.log("Result: ",res)
			$("#"+lead_id).remove();
		}),
		error: ((error) => {
			console.log("Error: ", error);
		})
	})
}