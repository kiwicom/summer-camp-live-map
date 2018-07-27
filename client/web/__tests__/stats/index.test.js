import renderer from 'react-test-renderer';
import { PageWrapper, NationalityContainer } from '../../components/stats/styled'

describe('Stats', () => {
  it('renders styled stats components', () => {
    const tree = renderer.create(
      <PageWrapper>
        <NationalityContainer>
          Page content
        </NationalityContainer>
      </PageWrapper>
    ).toJSON();
  
    expect(tree).toMatchSnapshot();
  })
});
