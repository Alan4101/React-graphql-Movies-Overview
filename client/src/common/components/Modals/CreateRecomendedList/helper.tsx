import * as Yup from 'yup';

export const CreacteReclistSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().max(200).required('Required')
})