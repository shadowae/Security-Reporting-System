import models from '../../../models';

const queryReport = async (root: any, { id }: any, context: any) => {
  return models.reports.find((item: { id: string }) => item.id === id);
};

export default queryReport;
