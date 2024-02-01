import React, { useEffect, useState } from 'react';
import Button from "components/button/Button";
import Card from "components/card";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";
import client from "api/axios";
import { Link } from 'react-router-dom';
import SubtleMultiAlert from 'components/alert/SubtleMultiAlert';
import SelectField from 'components/fields/SelectField';

const LeaveApplicationForm = ({ leaveId }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [type, setType] = useState(null);
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  const [formData, setFormData] = useState({
    description: '',
    to_date: '',
    from_date: '',
    type: '',
    date: '',
    hours: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (leaveId) {
      client.get(`/companies/${companySlug}/employees/${employeeId}/leaves/${leaveId}`)
        .then(response => {
          setFormData(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching time correction data:', error);
        });
    }
  }, [leaveId, companySlug, employeeId]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const clearForm = (e) => {
    setFormData({
      description: '',
      to_date: '',
      from_date: '',
      type: '',
      date: '',
      hours: ''
    });
  }

  const handleSubmit = () => {
    setIsLoading(true);
    if (leaveId) {
      client.put(`/companies/${companySlug}/employees/${employeeId}/leaves/${leaveId}`, formData)
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
      client.post(`/companies/${companySlug}/employees/${employeeId}/leaves`, formData)
        .then(response => {
          setTimeout(() => {
            setIsLoading(false);
            clearForm();
            setTitle("Application has been submitted.");
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
            {leaveId ? "Edit" : "Create"}
        </h4>
        <p className="mt-2 text-base text-gray-600">
          {leaveId ? "Update your leave request." : "Make a new leave request."}
        </p>
        {title && <SubtleMultiAlert
          type={type}
          title={title}
          description={description}
          extraClass="mt-2"
        />}
      </div>
      <div className="grid gap-4 grid-cols-12 rounded-2xl py-3">
        {leaveId ? <InputField
          label="Date"
          id="date"
          type="date"
          extra="col-span-12"
          value={formData.date}
          onChange={handleInputChange}
        /> : <InputField
            label="From Date"
            id={leaveId ? undefined : "from_date"}
            disabled={!!leaveId}
            type="date"
            extra="col-span-12 md:col-span-6"
            value={leaveId ? formData.date : formData.from_date}
            onChange={handleInputChange}
          />
        }
        {!leaveId && <InputField
              label="To Date"
              id={leaveId ? undefined : "to_date"}
              disabled={!!leaveId}
              type="date"
              extra="col-span-12 md:col-span-6"
              value={leaveId ? formData.date : formData.to_date}
              onChange={handleInputChange}
            />
        }
        <SelectField
          label="Type"
          id="type"
          extra="col-span-8 md:col-span-10 xl:col-span-8"
          value={formData.type}
          options={[
            { label: 'Vacation Leave', value: 'vacation_leave' },
            { label: 'Sick Leave', value: 'sick_leave' },
            { label: 'Emergency Leave', value: 'emergency_leave' },
            { label: 'Leave Without Pay', value: 'leave_without_pay' }
          ]}
          onChange={handleInputChange}
        />
        <InputField
          label="Duration"
          id="hours"
          type="number"
          placeholder="Hour/s"
          extra="col-span-4 md:col-span-2 xl:col-span-4"
          value={formData.hours}
          onChange={handleInputChange}
        />
        <TextField
          label="Description"
          id="description"
          extra="col-span-12"
          rows={3}
          value={formData.description ?? ''}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-4 flex justify-end my-2.5">
        <Link
          className="text-md flex font-bold underline items-center p-3 text-navy-800 hover:text-gray-800 dark:text-white mr-4"
          to="/ess/leaves"
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

export default LeaveApplicationForm;