import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { GrammarTopicDetailPage } from "./pages/GrammarTopicDetailPage";
import { GrammarTopicsPage } from "./pages/GrammarTopicsPage";
import { HomePage } from "./pages/HomePage";
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
        <Route path="modal-verbs" element={<GrammarTopicsPage section="modal-verbs" />} />
        <Route
          path="modal-verbs/:slug"
          element={
            <GrammarTopicDetailPage
              section="modal-verbs"
              backPath="/modal-verbs"
              backLabel="Modal Verbs"
            />
          }
        />
        <Route path="core-grammar" element={<GrammarTopicsPage section="core-grammar" />} />
        <Route
          path="core-grammar/:slug"
          element={
            <GrammarTopicDetailPage
              section="core-grammar"
              backPath="/core-grammar"
              backLabel="Core Grammar"
            />
          }
        />
        <Route path="irregular-verbs" element={<IrregularVerbsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
