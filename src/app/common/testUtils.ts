import { render } from "@testing-library/react";

interface givenWhenThen {
  given?: string;
  when: string;
  then: string;
};

// To set it() text description
const setGherkingTestDescription = ({ given, when, then }: givenWhenThen) => {
  `${given ? '\n    _ GIVEN: ' + given : ''}\n    _ WHEN: ${when}\n    _ THEN: ${then}`
}

// Gherking test description helpers
const useGiven = (callback: Function) => callback();
const useWhen = (callback: Function) => callback();
const useThen = (callback: Function) => callback();

const mockFetch = (data: any) => {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    }),
  );
};

const renderAsync = async <T>(
  asyncComponent: (props: T) => Promise<JSX.Element>,
  props: T
) => {
  const jsx = await asyncComponent(props);
  render(jsx);
}

export {
  setGherkingTestDescription,
  useGiven,
  useWhen,
  useThen,
  mockFetch,
  renderAsync,
};
