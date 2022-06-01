import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { saveAs } from 'file-saver';

const ResumeBuilder = () => {
	const [userDetails, setUserDetails] = useState({
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		website: '',
		github: '',
		linkedin: '',
		twitter: '',
		facebook: '',
		instagram: '',
		college: '',
		fromyear1: '',
		toyear1: '',
		qualification1: '',
		description1: '',
		school: '',
		fromyear2: '',
		toyear2: '',
		qualification2: '',
		description2: '',
		title1: '',
		link1: '',
		projectDescription1: '',
		title2: '',
		link2: '',
		projectDescription2: '',
		title3: '',
		link3: '',
		projectDescription3: '',
		institute1: '',
		position1: '',
		duration1: '',
		experienceDescription1: '',
		institute2: '',
		position2: '',
		duration2: '',
		experienceDescription2: '',
		skill1: '',
		skill2: '',
		skill3: '',
		skill4: '',
		skill5: '',
		skill6: '',
		interest1: '',
		interest2: '',
		interest3: '',
		interest4: '',
		interest5: '',
		interest6: '',
	});

	const onFormSubmit = async (event) => {
		event.preventDefault();
		await axios.post('http://localhost:5000/create-pdf', userDetails);
		const response = await axios.get('http://localhost:5000/fetch-pdf', {
			responseType: 'arraybuffer',
		});
		const pdfBlob = new Blob([response.data], {
			type: 'application/pdf',
		});
		saveAs(pdfBlob, `${userDetails.firstname}-resume.pdf`);
	};

	return (
		<Container className="my-4">
			<Row className="mb-4">
				,<h1>Resume Builder</h1>
				<p>
					Please fill up the form below to automatically generate a
					resume
				</p>
			</Row>
			<Row>
				<Form onSubmit={onFormSubmit}>
					<Row>
						<Col>
							<h4>Personal Details</h4>
							<Form.Group className="mb-3" controlId="firstname">
								<Form.Control
									required
									type="text"
									placeholder="First name"
									value={userDetails.firstname}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											firstname: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="lastname">
								<Form.Control
									required
									type="text"
									placeholder="Last name"
									value={userDetails.lastname}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											lastname: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="email">
								<Form.Control
									required
									type="email"
									placeholder="Email"
									value={userDetails.email}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											email: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="phone">
								<Form.Control
									required
									type="number"
									placeholder="Mobile phone number"
									value={userDetails.phone}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											phone: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="website">
								<Form.Control
									type="text"
									placeholder="Personal website"
									value={userDetails.website}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											website: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="github">
								<Form.Control
									type="text"
									placeholder="Gihub profile link"
									value={userDetails.github}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											github: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="linkedin">
								<Form.Control
									type="text"
									placeholder="LinkedIn profile link"
									value={userDetails.linkedin}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											linkedin: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="twitter">
								<Form.Control
									type="text"
									placeholder="Twitter profile link"
									value={userDetails.twitter}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											twitter: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="facebook">
								<Form.Control
									type="text"
									placeholder="Facebook profile link"
									value={userDetails.facebook}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											facebook: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="instagram">
								<Form.Control
									type="text"
									placeholder="Instagram profile link"
									value={userDetails.instagram}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											instagram: e.target.value,
										})
									}
								/>
							</Form.Group>
						</Col>
						<Col>
							<h4>Education Details</h4>
							<Form.Group className="mb-4" controlId="college">
								<Form.Control
									type="text"
									placeholder="College/University name"
									value={userDetails.college}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											college: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="fromyear1">
								<Form.Label>
									College/University Start date
								</Form.Label>
								<Form.Control
									type="date"
									value={userDetails.fromyear1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											fromyear1: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="toyear1">
								<Form.Label>
									College/University End date
								</Form.Label>
								<Form.Control
									type="date"
									value={userDetails.toyear1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											toyear1: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group
								className="mb-4"
								controlId="qualification1"
							>
								<Form.Control
									type="text"
									placeholder="Qualification"
									value={userDetails.qualification1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											qualification1: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group
								className="mb-4"
								controlId="description1"
							>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Description"
									value={userDetails.description1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											description1: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="school">
								<Form.Control
									type="text"
									placeholder="School name"
									value={userDetails.school}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											school: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="fromyear2">
								<Form.Label>School Start date</Form.Label>
								<Form.Control
									type="date"
									value={userDetails.fromyear2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											fromyear2: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="toyear2">
								<Form.Label>School End date</Form.Label>
								<Form.Control
									type="date"
									value={userDetails.toyear2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											toyear2: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group
								className="mb-4"
								controlId="qualification2"
							>
								<Form.Control
									type="text"
									placeholder="Qualification"
									value={userDetails.qualification2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											qualification2: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group
								className="mb-4"
								controlId="description2"
							>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Description"
									value={userDetails.description2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											description2: e.target.value,
										})
									}
								/>
							</Form.Group>
						</Col>
					</Row>

					<Row>
						<Col>
							<h4>Your Top 3 Projects</h4>
							<Form.Group className="mb-4" controlId="title1">
								<Form.Control
									type="text"
									placeholder="Project 1 Name"
									value={userDetails.title1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											title1: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="link1">
								<Form.Control
									type="link"
									placeholder="Project 1 Link"
									value={userDetails.link1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											link1: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group
								className="mb-4"
								controlId="projectDescription1"
							>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Description"
									value={userDetails.projectDescription1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											projectDescription1: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="title2">
								<Form.Control
									type="text"
									placeholder="Project 2 Name"
									value={userDetails.title2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											title2: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="link2">
								<Form.Control
									type="text"
									placeholder="Project 2 Link"
									value={userDetails.link2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											link2: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group
								className="mb-4"
								controlId="projectDescription2"
							>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Description"
									value={userDetails.projectDescription2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											projectDescription2: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="title3">
								<Form.Control
									type="text"
									placeholder="Project 3 Name"
									value={userDetails.title3}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											title3: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="link3">
								<Form.Control
									type="text"
									placeholder="Project 3 Link"
									value={userDetails.link3}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											link3: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group
								className="mb-4"
								controlId="projectDescription3"
							>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Description"
									value={userDetails.projectDescription3}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											projectDescription3: e.target.value,
										})
									}
								/>
							</Form.Group>
						</Col>
						<Col>
							<h4>Experience</h4>
							<h6>Experience 1</h6>
							<Form.Group className="mb-4" controlId="institute1">
								<Form.Control
									type="text"
									placeholder="Organisation name"
									value={userDetails.institute1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											institute1: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="position1">
								<Form.Control
									type="text"
									placeholder="Position"
									value={userDetails.position1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											position1: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="duration1">
								<Form.Control
									type="text"
									placeholder="Duration"
									value={userDetails.duration1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											duration1: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group
								className="mb-4"
								controlId="experienceDescription1"
							>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Experience Description"
									value={userDetails.experienceDescription1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											experienceDescription1:
												e.target.value,
										})
									}
								/>
							</Form.Group>
							<h6>Experience 2</h6>
							<Form.Group className="mb-4" controlId="institute2">
								<Form.Control
									type="text"
									placeholder="Organisation name"
									value={userDetails.institute2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											institute2: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="position2">
								<Form.Control
									type="text"
									placeholder="Position"
									value={userDetails.position2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											position2: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="duration2">
								<Form.Control
									type="text"
									placeholder="Duration"
									value={userDetails.duration2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											duration2: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group
								className="mb-4"
								controlId="experienceDescription2"
							>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Experience Description"
									value={userDetails.experienceDescription2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											experienceDescription2:
												e.target.value,
										})
									}
								/>
							</Form.Group>
						</Col>
					</Row>

					<Row>
						<Col>
							<h4>Skills/Languages</h4>
							<Form.Group className="mb-4" controlId="skill1">
								<Form.Control
									type="text"
									placeholder="Skill 1"
									value={userDetails.skill1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											skill1: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="skill2">
								<Form.Control
									type="text"
									placeholder="Skill 2"
									value={userDetails.skill2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											skill2: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="skill3">
								<Form.Control
									type="text"
									placeholder="Skill 3"
									value={userDetails.skill3}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											skill3: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="skill4">
								<Form.Control
									type="text"
									placeholder="Skill 4"
									value={userDetails.skill4}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											skill4: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="skill5">
								<Form.Control
									type="text"
									placeholder="Skill 5"
									value={userDetails.skill5}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											skill5: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="skill6">
								<Form.Control
									type="text"
									placeholder="Skill 6"
									value={userDetails.skill6}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											skill6: e.target.value,
										})
									}
								/>
							</Form.Group>
						</Col>
						<Col>
							<h4>Interests</h4>
							<Form.Group className="mb-4" controlId="interest1">
								<Form.Control
									type="text"
									placeholder="Interest 1"
									value={userDetails.interest1}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											interest1: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="interest2">
								<Form.Control
									type="text"
									placeholder="Interest 2"
									value={userDetails.interest2}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											interest2: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="interest3">
								<Form.Control
									type="text"
									placeholder="Interest 3"
									value={userDetails.interest3}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											interest3: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="interest4">
								<Form.Control
									type="text"
									placeholder="Interest 4"
									value={userDetails.interest4}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											interest4: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="interest5">
								<Form.Control
									type="text"
									placeholder="Interest 5"
									value={userDetails.interest5}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											interest5: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="interest6">
								<Form.Control
									type="text"
									placeholder="Interest 6"
									value={userDetails.interest6}
									onChange={(e) =>
										setUserDetails({
											...userDetails,
											interest6: e.target.value,
										})
									}
								/>
							</Form.Group>
						</Col>
					</Row>

					<Button type="submit" variant="outline-primary">
						Create My Resume
					</Button>
				</Form>
			</Row>
		</Container>
	);
};

export default ResumeBuilder;
