import models from '../../../models';

const createReport = async (root: any, { input }: any, context: any) => {
  return models.reports.push(input);
};

export default createReport;