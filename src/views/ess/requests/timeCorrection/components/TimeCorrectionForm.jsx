import React, { useEffect, useState } from 'react';
import Button from "components/button/Button";
import Card from "components/card";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";
import client from "api/axios";
import { Link } from 'react-router-dom';
import SubtleMultiAlert from 'components/alert/SubtleMultiAlert';

const TimeCorrectionForm = ({ correctionId }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [type, setType] = useState(null);
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    clock_in: '',
    clock_out: '',
    description: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (correctionId) {
      client.get(`/companies/${companySlug}/employees/${employeeId}/time-corrections/${correctionId}`)
        .then(response => {
          setFormData(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching time correction data:', error);
        });
    }
  }, [correctionId, companySlug, employeeId]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const clearForm = (e) => {
    setFormData({
      title: '',
      date: '',
      clock_in: '',
      clock_out: '',
      description: ''
    });
  }

  const handleSubmit = () => {
    setIsLoading(true);
    const updatedFormData = {
      ...formData,
      clock_in: `${formData.date} ${formData.clock_in}`,
      clock_out: `${formData.date} ${formData.clock_out}`,
    };

    if (correctionId) {
      client.put(`/companies/${companySlug}/employees/${employeeId}/time-corrections/${correctionId}`, updatedFormData)
        .then(response => {
          setTimeout(() => {
            setIsLoading(false);
            setTitle(response.data.message);
            setDescription('');
            setType('success')
          }, 1000);
        })
        .catch(error => {
          setTitle('Error updating time correction:');
          setDescription(error.response.data.errors);
          setType('error')
          setIsLoading(false);
        });
    } else {
      client.post(`/companies/${companySlug}/employees/${employeeId}/time-corrections`, updatedFormData)
        .then(response => {
          setTimeout(() => {
            setIsLoading(false);
            clearForm();
            setTitle(response.data.message);
            setDescription('');
            setType('success')
          }, 1000);
        })
        .catch(error => {
          setTitle('Error creating time correction:');
          setDescription(error.response.data.errors);
          setType('error')
          setIsLoading(false);
        });
    }
  };

  return (
    <Card extra={"w-full p-4"}>
      <div className="ml-3 pb-5">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {correctionId ? "Edit" : "Create"}
        </h4>
        <p className="mt-2 text-base text-gray-600">
          {correctionId ? "Update your time correction request." : "Make a new time correction request."}
        </p>
        {title && <SubtleMultiAlert
          type={type}
          title={title}
          description={description}
          extraClass="mt-2"
        />}
      </div>
      {/* Project 1 */}
      <div className="grid gap-4 grid-cols-2 rounded-2xl py-3">
        <InputField
          label="Title"
          id="title"
          type="text"
          extra="col-span-2"
          value={formData.title}
          onChange={handleInputChange}
        />
        <InputField
          label="Date"
          id="date"
          type="date"
          extra="col-span-2"
          value={formData.date}
          onChange={handleInputChange}
          />
        <InputField
          label="Clock In"
          id="clock_in"
          type="time"
          extra="col-span-2 sm:col-span-1"
          value={formData.clock_in}
          onChange={handleInputChange}
        />
        <InputField
          label="Clock Out"
          id="clock_out"
          type="time"
          extra="col-span-2 sm:col-span-1"
          value={formData.clock_out}
          onChange={handleInputChange}
        />
        <TextField
          label="Other Details"
          id="description"
          extra="col-span-2"
          rows={3}
          value={formData.description ?? ''}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-4 flex justify-end my-2.5">
        <Link
          className="text-md flex font-bold underline items-center p-3 text-navy-800 hover:text-gray-800 dark:text-white mr-4"
          to="/ess/time-corrections"
        >
          Back
        </Link>
        <Button
          label={isLoading ? "Saving..." : "Save"}
          status="positive"
          onClick={handleSubmit}
          disabled={isLoading}
          isLoading={isLoading}
          extra="w-36"
        />
      </div>
    </Card>
  )
}

export default TimeCorrectionForm;