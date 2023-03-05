import React from 'react';
import { Container, Segment, Button, Checkbox, Form, Dropdown } from 'semantic-ui-react';
import statusOptions from './constants/statusOptions';

const SubmissionPage = () => {
  return (
    <Form>
      <Container>
        <Dropdown
          placeholder='Select Friend'
          fluid
          selection
          clearable
          options={statusOptions}
        />
        <Form.Field>
          <label>Repository Name</label>
          <input placeholder='Repository Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        <Segment >
          Findings
          <Form.Field>
            <label>Repository Name</label>
            <input placeholder='Repository Name' />
          </Form.Field>
        </Segment>
      </Container>
    </Form >
  )
}

export default SubmissionPage