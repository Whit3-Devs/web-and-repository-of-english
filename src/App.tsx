import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import {
  findGrammarTopicBySlug,
  grammarTopicSectionDetails,
  visibleGrammarTopicSections
} from "./data/grammarTopics";
import { GrammarTopicDetailPage } from "./pages/GrammarTopicDetailPage";
import { GrammarTopicsPage } from "./pages/GrammarTopicsPage";
import { HomePage } from "./pages/HomePage";
import { IrregularVerbDetailPage } from "./pages/IrregularVerbDetailPage";
import { IrregularVerbsPage } from "./pages/IrregularVerbsPage";
import { VerbTenseDetailPage } from "./pages/VerbTenseDetailPage";
import { VerbTensesPage } from "./pages/VerbTensesPage";

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="verb-tenses" element={<VerbTensesPage />} />
        <Route path="verb-tenses/:slug" element={<VerbTenseDetailPage />} />
        {visibleGrammarTopicSections.map((section) => {
          const details = grammarTopicSectionDetails[section];

          return (
            <Route key={section} path={details.path.slice(1)}>
              <Route index element={<GrammarTopicsPage section={section} />} />
              <Route
                path=":slug"
                element={
                  <GrammarTopicDetailPage
                    section={section}
                    backPath={details.path}
                    backLabel={details.label}
                  />
                }
              />
            </Route>
          );
        })}
        <Route path="core-grammar" element={<Navigate to="/sentence-building" replace />} />
        <Route path="core-grammar/:slug" element={<LegacyCoreGrammarRedirect />} />
        <Route path="irregular-verbs" element={<IrregularVerbsPage />} />
        <Route path="irregular-verbs/:slug" element={<IrregularVerbDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

function LegacyCoreGrammarRedirect() {
  const { slug } = useParams();
  const topic = slug ? findGrammarTopicBySlug(slug) : undefined;

  return (
    <Navigate
      to={topic ? `${grammarTopicSectionDetails[topic.section].path}/${topic.slug}` : "/sentence-building"}
      replace
    />
  );
}
