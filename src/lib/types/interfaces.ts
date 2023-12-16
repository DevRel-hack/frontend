export interface IEventData {
  id: number | null;
  comments: string;
  title: string;
  description: string;
  start_at: string;
  is_internal: boolean | null;
  form: string;
  place: string;
  url: string;
  status: { id: number | null; title: string };
  tags: [{ id: number | null; title: string }];
}
